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
                    <img alt='' src=''/>
                    <h2>Guilherme Armesto Job</h2>
                    <GrLinkedin />
                </ContainerCard>
            </LinkTo>

            <LinkTo target='_blank' href='https://www.linkedin.com/in/guilherme-armesto-job-a91b72204'>
                <ContainerCard>
                    <img alt='' src=''/>
                    <h2>Italo Domingos</h2>
                    <GrLinkedin />
                </ContainerCard>
            </LinkTo>
            <LinkTo target='_blank' href='https://www.linkedin.com/in/guilherme-armesto-job-a91b72204'>
                <ContainerCard>
                    <img alt='' src=''/>
                    <h2>João Garbini</h2>
                    <GrLinkedin />
                </ContainerCard>
            </LinkTo>
            <LinkTo target='_blank' href='https://www.linkedin.com/in/guilherme-armesto-job-a91b72204'>
                <ContainerCard>
                    <img alt='' src=''/>
                    <h2>Miqueias Carvalho</h2>
                    <GrLinkedin />
                </ContainerCard>
            </LinkTo>
            <LinkTo target='_blank' href='https://www.linkedin.com/in/guilherme-armesto-job-a91b72204'>
                <ContainerCard>
                    <img alt='' src=''/>
                    <h2>Vilson Neto</h2>
                    <GrLinkedin />
                </ContainerCard>
            </LinkTo>
        </Container>
    );
};

export default Contact;