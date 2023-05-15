import { styled } from "styled-components";

const Home = (props) => {
    return (
        <Container>
            <Section>
                <h5>
                    <a>Hiring in a hurry? - </a>
                </h5>
                <p>
                    Find talented pros in record time with Upwork and keep business moving.
                </p>
            </Section>
            <Layout>
                <div>Left Side</div>
                <div>Main</div>
                <div>Right Side</div>
            </Layout>
        </Container>
    )
};


const Container = styled.div`
    padding-top: 72px;
    max-width: 100%;

    @media (max-width: 768px) {
        padding-top: 52px;
    }
`;

const Section = styled.div`
    min-height: 50px;
    padding: 16px 0;
    box-sizing: content-box;
    text-align: center;
    text-decoration: underline;
    display: flex;
    justify-content: center;

    h5{
        color: #0a66c2;
        font-size: 14px;

        a {
            font-weight: 700;
        }
    }

    p {
        font-size: 14px;
        color: #434649;
        font-weight: 600;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0 5px;
    }
`;

const Layout = styled.div`
    display: grid;
`;

export default Home;