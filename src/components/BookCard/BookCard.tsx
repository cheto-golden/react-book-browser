import React from "react";
import { BookCardProp } from "./types";
import {
    ImageContainer,
    InfoShow,
    ShowBox,
    ShowAuthor,
    ShowLabelTitle,
    ShowThumb,
    ShowTitle,
} from "./styles";
import { useNavigate } from "react-router-dom";

const BookCard: React.FC<BookCardProp> = ({
                                               id,
                                               title,
                                               authors,
                                               thumbnail
                                            }) => {
    const navigate = useNavigate();

    return (
        <ShowBox onClick={() => navigate(`/detail/${id}`)}>
            <ImageContainer>
                <ShowThumb src={thumbnail} />
            </ImageContainer>
            <InfoShow>
                <ShowTitle>
                    <ShowLabelTitle>{title}</ShowLabelTitle>
                    <ShowAuthor>{authors}</ShowAuthor>
                </ShowTitle>
            </InfoShow>
        </ShowBox>
    );
};

export default BookCard;