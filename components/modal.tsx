import React, { useState } from 'react';
import {
  Modal as ModalWrapper,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalHeader,
  Button,
  ModalFooter,
  useDisclosure,
  Textarea,
  Input,
  Box,
} from '@chakra-ui/react';
import Comments from './comments';
import type { Comment, Image } from '@app/views/home/main';
import { CREATE_COMMENT, GET_POSTS, CREATE_IMAGE } from '@app/queries';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
interface ModalProps {
  cardId?: number;
  hasImage?: boolean;
  comments?: Comment[];
}

const Modal = ({ cardId, hasImage = false, comments }: ModalProps) => {
  const [comment, setComment] = useState<string>('');
  const [file, setFile] = useState<File>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [uploadImage] = useMutation(CREATE_IMAGE, {
    variables: {
      file: file,
    },
    refetchQueries: [{ query: GET_POSTS }],
  });
  const [createComment] = useMutation(CREATE_COMMENT, {
    variables: {
      image: cardId,
      comment: comment,
    },
    update(cache, { data: { createComment } }) {
      const { images }: any = cache.readQuery({
        query: GET_POSTS,
      });

      cache.writeQuery({
        query: GET_POSTS,

        data: {
          images: images?.map((image: Image) => {
            if (image.id === cardId) {
              const newComments = [...image.comments, createComment];
              return { ...image, comments: newComments };
            }
            return image;
          }),
        },
      });
    },
  });

  const onFileUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { files } = e.target;
    setFile(files?.[0] as File);
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const { value } = e.target;
    setComment(value);
  };

  const onSubmit = async (): Promise<void> => {
    if (hasImage) {
      await uploadImage();
    } else {
      await createComment();
    }
    onClose();
  };
  return (
    <React.Fragment>
      <Button onClick={onOpen}>
        {hasImage ? 'Upload Image' : 'See Comments'}
      </Button>

      <ModalWrapper isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{hasImage ? 'Upload Image' : 'Comments'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {hasImage ? (
              <Input
                placeholder="Basic usage"
                type="file"
                onChange={onFileUpload}
              />
            ) : (
              <Box>
                <Textarea
                  placeholder="Write your comment here"
                  onChange={onChange}
                />
                <Comments comments={comments} />
              </Box>
            )}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={onSubmit}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalWrapper>
    </React.Fragment>
  );
};

export default Modal;
