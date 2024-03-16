// Filename - components/Footer.js

import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>
			<h1
				style={{
					color: "white",
					textAlign: "center",
					marginTop: "10px",
					marginBottom: "20px"
				}}
			>
				Montare Móveis - Fabricação e Montagens
			</h1>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>Sobre nós</Heading>
						<FooterLink href="#">
							Aim
						</FooterLink>
						<FooterLink href="#">
							Vision
						</FooterLink>
						<FooterLink href="#">
							Testimonials
						</FooterLink>
					</Column>
					<Column>
						<Heading>Serviços</Heading>
						<FooterLink href="#">
							Writing
						</FooterLink>
						<FooterLink href="#">
							Internships
						</FooterLink>
						<FooterLink href="#">
							Coding
						</FooterLink>
						<FooterLink href="#">
							Teaching
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contate-nos</Heading>
						<FooterLink href="#">
							Uttar Pradesh
						</FooterLink>
						<FooterLink href="#">
							Ahemdabad
						</FooterLink>
						<FooterLink href="#">
							Indore
						</FooterLink>
						<FooterLink href="#">
							Mumbai
						</FooterLink>
					</Column>
					<Column>
						<Heading>Redes Sociais</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</FooterContainer>
			<h1
				style={{
					color: "white",
					textAlign: "center",
					marginTop: "10px",
					marginBottom: "20px"
				}}
			>
				© Todos os direitos reservados - Montare Móveis 2024
			</h1>
		</Box>
	);
};
export default Footer;
