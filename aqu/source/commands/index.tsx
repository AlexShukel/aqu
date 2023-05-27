import {Box, Text} from 'ink';
import React from 'react';
import zod from 'zod';

export const options = zod.object({
	name: zod.string().default('Stranger').describe('Name'),
});

type Props = {
	options: zod.infer<typeof options>;
};

export default function Index({options}: Props) {
	return (
		<Box
			width="100%"
			borderColor="red"
			borderStyle="round"
			height="100%"
			alignItems="center"
		>
			<Text>
				Hello, <Text color="green">{options.name}</Text>
			</Text>
		</Box>
	);
}
