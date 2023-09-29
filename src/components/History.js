import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
const data = [
	{
	"year": "Year 2022-2023",
	"president": "Rtr. Ayesh Malindu Weerasinghe",
	"projects": ["Kindred Kidneys: Community Service initiative to help kidney patients in Sri Lanka", "Let’s Meet: Club Service initiative strengthening the bond between club members.", "En Vogue: a Beeralu-making workshop in collaboration with Nifty Looms. ", " United we Stand: Strengthen the fellowship between international Rotaractors and focusing on joint initiatives, Joint Bulletin, Twin Club Agreement, and Letterhead Exchanges"]
	},
	{
		"year": "Year 2021-2022",
		"president": "Rtr. Senarathne Mudiyanselage Kavinda Piyumal Senarathne",
		"projects": ["Kindred Kidneys: Community Service initiative to help kidney patients in Sri Lanka", "Marathon Towards Greenery: Environmental service initiative including projects “Gaga Addara”, “Maga Addara”, “Haritha Pasala” and “Kadolana and Environmental Cleanup”.", "DIYer: A session series focusing on daily life skills","United we Stand: Create a platform to help Rotaractors to learn different languages and to strengthen the fellowship between Rotaractors and focusing on International Service Bulletin, Twin Club Agreement, and Letterhead Exchanges"]
	},
	{
		"year": "Year 2020-2021",
		"president": "Rtr. Gamaachchigei Anju Cheran",
		"projects": ["Kindred Kidneys: Community Service initiative to help kidney patients in Sri Lanka", "Let’s Meet: Club Service initiative strengthening the bond between club members.", "Battle with Pandemic: International Service initiative in sharing experiences from around theglobe in the face of the COVID - 19 pandemic.", "Marathon Towards Greenery: Environmental service initiative including projects “Gaga Addara” and “Maga Addara”."]
	},
	{
		"year": "Year 2019-2020",
		"president": "Rtr. Thuiyadura Hasitha Prashan Wellaboda",
		"projects": ["Marathon Towards Greenery: Environmental service initiative including projects “Gaga Addara”, “Maga Addara” and “Haritha Pasala”.", "Mitratā: International Service initiative with Rotaract Clubs in Nepal (RID 3292)", "Kindred Kidneys: Community Service initiative to help kidney patients in Sri Lanka", "Share the Joy: Club service and community service-based initiative to celebrate birthdays of members in a worthy way by helping poor people."]
	},
	{
		"year": "Year 2018-2019",
		"president": "Rtr. Mirisse Lokuge Waruna Rasanga",
		"projects": ["Marathon Towards Greenery: Environmental service initiative including projects “Gaga Addara”, “Maga Addara” and “Haritha Pasala”.", "United We Stand", "Rotaractors for Global Goals", "Share the Joy: Club service and community service-based initiative to celebrate the birthdays of members in a worthy way by helping poor people."]
	},
	{
		"year": "Year 2017-2018",
		"president": "Rtr. Himantha Asiri Wijayaratne Alahakoon",
		"projects": ["Marathon Towards Greenery: Environmental service initiative including projects “Gaga Addara”, “Maga Addara” and “Haritha Pasala”.", "Sathkara: Community and Club service-based project", "Together as One"]
	},
	{
		"year": "Year 2016-2017",
		"president": "Rtr. Gallage Chathuranga Lakruwan",
		"projects": ["Sathkara: Community and Club service-based project", "Ganga Addara: Tree planting project to protect riverbanks"]
	},
	{
		"year": "Year 2015-2016",
		"president": "Rtr. Hansaka Fernando",
		"projects": ["Ganga Addara: Tree planting project to protect riverbanks", "Sathkara: Community and Club service-based project"]
	},
	{
		"year": "Year 2014-2015",
		"president": "Rtr. Dulitha Nelaka Wanniarachchi",
		"projects": ["We for You: A Series of Community Service Projects", "Get-together: With the past and present members of Alumni Rotaract Mora"]
	},
	{
		"year": "Year 2013-2014",
		"president": "Rtr. Lahiru Bandara Gawarammana",
		"projects": ["Afterlife: An unplugged concert featuring talented artists from the Sri Lankan rock industry", "First Get-together: With the past and present members of Alumni Rotaract Mora","We for You: A Series of Community Service Projects"]
	},
];
function History() {
	return (
		<div>
			<Text
				fontWeight="700"
				textAlign="center"
				m="4"
				fontSize="2xl"
				color="pink.500"
			>
				History
			</Text>

			{
				(data.map((dt, index) => {
					if (index % 2 == 0) {
						return (
							<Flex
								justifyContent="center"
								alignItems="center"
								ml={{ base: "50px", lg: "130px" }}
								key={index}
							>
								<Box>
									<Text fontWeight="bold">{ dt.year}</Text>
								</Box>
								<Box
									boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
									p={{ base: "5", lg: "10" }}
									m="4"
									borderLeftWidth="4px"
									borderLeftColor="pink.400"
								>
									<Text fontWeight="bold">{dt.president}</Text>
									<Text>Signature Projects: </Text>
									<Text>
										<ul>
											{dt.projects.map((project) => {
												return (<li>{ project}</li>)
											})}

										</ul>
									</Text>
								</Box>
							</Flex>
						)
					} else {
						return (
							<Flex
							justifyContent="center"
							alignItems="center"
								mr={{ base: "50px", lg: "130px", md: "130px" }}
								key={index}
						>
							<Box
								boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
								p={{ base: "5", lg: "10" }}
								m="4"
								borderRightWidth="4px"
								borderRightColor="pink.400"
							>
									<Text fontWeight="bold">{dt.president}</Text>
									<Text>Signature Projects: </Text>
									<Text>
										<ul>
										{dt.projects.map((project) => {
											return (<li>{project}</li>)
										})}

										</ul>
									</Text>
							</Box>
							<Box>
									<Text fontWeight="bold">{dt.year}</Text>
							</Box>
							</Flex>
						)
					}
				}))
			}

			

			{/* <Flex
				justifyContent="center"
				alignItems="center"
				ml={{ base: "50px", lg: "130px" }}
			>
				<Box>
					<Text fontWeight="bold">Rtr. Year 2023-2022</Text>
				</Box>
				<Box
					boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
					p={{ base: "5", lg: "10" }}
					m="4"
					borderLeftWidth="4px"
					borderLeftColor="pink.400"
				>
					<Text fontWeight="bold">Sub heading</Text>
					<Text>ssvdh hadghdf hgahd fhdgf </Text>
				</Box>
			</Flex>
			<Flex
				justifyContent="center"
				alignItems="center"
				mr={{ base: "50px", lg: "130px", md: "130px" }}
			>
				<Box
					boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
					p={{ base: "5", lg: "10" }}
					m="4"
					borderRightWidth="4px"
					borderRightColor="pink.400"
				>
					<Text fontWeight="bold">Sub heading</Text>
					<Text>ssvdh hadghdf hgahd fhdgf </Text>
				</Box>
				<Box>
					<Text fontWeight="bold">Rtr. Year 2023-2022</Text>
				</Box>
			</Flex> */}
		
		</div>
	);
}

export default History;
