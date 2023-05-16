import { styled } from "styled-components";

const Main = (props) => {
    return (
        <Container>
            <ShareBox>
                <div>
                    <img src='/images/user.svg' alt=""/>
                    <button>Start a post</button>
                </div>
                <div>
                    <button>
                        <img src="/images/photo-ic.svg" alt=""/>
                        <span>Photo</span>
                    </button>
                    <button>
                        <img src="/images/video.svg" alt=""/>
                        <span>Video</span>
                    </button>
                    <button>
                        <img src="/images/event.svg" alt=""/>
                        <span>Events</span>
                    </button>
                    <button>
                        <img src="/images/article.svg" alt=""/>
                        <span>Write article</span>
                    </button>
                </div>
            </ShareBox>
            <Article>
                <SharedPage>
                    <a>
                        <img src="/images/user.svg" alt=""/>
                        <div>
                            <span>Name</span>
                            <span>Info</span>
                            <span>Time</span>
                        </div>
                    </a>
                    <a>
                        <button>
                            <img src="/images/threedots.svg" alt=""/>
                        </button>
                    </a>
                </SharedPage>
                <Description>Description</Description>
                    <SharedImage>
                        <a>
                            <img src="images/shared-image.jpg" alt="" />
                        </a>
                    </SharedImage>
            </Article>
        </Container>
    )
};

const Container = styled.div`
    grid-area:  main;

    div > button > img {
        height: 30px;
        width: 30px;
    }
`;

const CommonCard = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
`;

const ShareBox = styled(CommonCard)`
    display: flex;
    flex-direction: column;
    color: #958b7b;
    margin: 0 0 8px;
    background: white;
    div {
        button {
            outline: none;
            color: rgba(0, 0, 0, 0.6);
            font-size: 14px;
            line-height: 1.5;
            min-height: 48px;
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            font-weight: 600;
        }
        &:first-child {
            display: flex;
            align-items: center;
            padding: 8px 16px;

            img {
                width: 48px;
                border-radius: 50%;
                margin-right: 8px;
            }
            button {
                margin: 4px 0;
                flex-grow: 1;
                border-radius: 35px;
                padding-left: 16px;
                border: 1px solid rgba(0, 0, 0, 0.15);
            }
        }
        &:nth-child(2) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 4px;

            button {
                img{
                    margin: 0 4px 0 -2px;
                }
                span {
                    color: #70b5f9;
                }
            }
        }
    }
`;

const Article = styled(CommonCard)``;

const SharedPage = styled.div`
    padding-right: 40px;
    flex-wrap: nowrap;
    padding: 12px 16px 0;
    margin-bottom: 8px;
    align-items: center;
    display: flex;
    a {
        margin-right: 12px;
        flex-grow: 1;
        overflow: hidden;
        display: flex;

        img {
            width: 48px;
            height: 48px;
        }

        & > div {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            margin-left: 8px;
            overflow: hidden;
            span {
                text-align: left;
                &:first-child {
                    font-size: 14px;
                    font-weight: 700;
                    color: rgba(0, 0, 0, 1);
                }

                &:nth-child( n+1 ) {
                    font-size: 12px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }

    button {
        position: absolute;
        right: 12px;
        top: 0;
        background: transparent;
        border: none;
        outline: none;

    }

    button > img {
        width: 30px;
        height: 30px;
    }
`;

const Description = styled.div`
    padding: 0 16px;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.9);
    font-size: 14px;
    text-align: left;
`;

const SharedImage = styled.div`
    img {
        margin-top: 8px;
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

export default Main;