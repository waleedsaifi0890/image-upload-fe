import React from 'react';
import { Box, Text, Divider } from '@chakra-ui/react';
import type { Comment } from '@app/views/home/main';

interface CommentProps {
  comments: Comment[];
}

const Comments = ({ comments }: CommentProps): JSX.Element => {
  return (
    <Box mt={3} display="flex" flexDirection="column" gap="5">
      {comments?.length > 0 && (
        <Box>
          {comments?.map((comment: Comment) => {
            return (
              <Box mb={1} key={comment.id}>
                <Text>{comment.comment}</Text>
                <Divider />
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Comments;
