import React from "react";
import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/react";

const CountUpCard = ({ title, value }) => {
	return (
		<Stat>
			<StatLabel>{title}</StatLabel>
			<StatNumber fontSize="2xl" fontWeight="bold" color="teal.800">
				{value}
			</StatNumber>
			<StatHelpText>and counting...</StatHelpText>
		</Stat>
	);
};

export default CountUpCard;
