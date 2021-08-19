import Header from "../../components/header";
import { ContainerCard, Container, LinkTo } from './style';
import { GrLinkedin } from 'react-icons/gr';


const Contact = () => {

    return(

        <Container>

            <Header />
            
            <h1>Contacts Us</h1>

            <LinkTo target='_blank' href='https://www.linkedin.com/in/guilherme-armesto-job-a91b72204'>
                <ContainerCard>
                    <h2>Guilherme Armesto Job</h2>
                    <GrLinkedin />
                </ContainerCard>
            </LinkTo>

            <LinkTo target='_blank' href='https://www.linkedin.com/in/italo-silva-536b6111b/'>
                <ContainerCard>
                    <h2>Italo Domingos</h2>
                    <GrLinkedin />
                </ContainerCard>
            </LinkTo>
            <LinkTo target='_blank' href='https://www.linkedin.com/in/jo%C3%A3o-garbini-294a393a/'>
                <ContainerCard>
                    <h2>João Garbini</h2>
                    <GrLinkedin />
                </ContainerCard>
            </LinkTo>
            <LinkTo target='_blank' href='linkedin.com/in/miqueias-carvalho-dos-santos'>
                <ContainerCard>
                    <h2>Miqueias Carvalho</h2>
                    <GrLinkedin />
                </ContainerCard>
            </LinkTo>
            <LinkTo target='_blank' href='https://www.linkedin.com/in/vilson-neto-40539b17b/'>
                <ContainerCard>
                    <h2>Vilson Neto</h2>
                    <GrLinkedin />
                </ContainerCard>
            </LinkTo>
        </Container>
    );
};

export default Contact;