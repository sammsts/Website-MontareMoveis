import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";

const Footer = ({ yearFooter }) => {
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
						<FooterLink href="sobre">
							Sobre a empresa
						</FooterLink>
						<FooterLink href="dadospublicos">
							Dados públicos
						</FooterLink>
						<FooterLink href="parceiros">
							Parceiros
						</FooterLink>
					</Column>
					<Column>
						<Heading>Serviços</Heading>
						<FooterLink href="fabricacoes">
							Fabricações
						</FooterLink>
					</Column>
					<Column>
						<Heading>Contate-nos</Heading>
						<FooterLink href="contato">
							Trabalhe conosco
						</FooterLink>
						<FooterLink href="https://api.whatsapp.com/send?1=pt_BR&phone=5555996838296" target="_blank">
							Whatsapp
						</FooterLink>
						<FooterLink href="mailto:montaremoveisfm@gmail.com">
							Email
						</FooterLink>
					</Column>
					<Column>
						<Heading>Redes Sociais</Heading>
						<FooterLink href="https://www.facebook.com/share/mDTSTqMaUPFYR7h4/?mibextid=qi20mq" target="_blank">
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
						<FooterLink href="https://www.instagram.com/joao.netomoveis/" target="_blank">
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
				© Todos os direitos reservados - Montare Móveis {yearFooter}
			</h1>
		</Box>
	);
};
export default Footer;
