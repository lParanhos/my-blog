import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import getThemeColor from "../../utils/getThemeColor";

import * as S from "./styles"

const Pagination = ({ isFirst, isLast, currentPage, numPages, prevPage, nextPage }) => (
    <S.PaginationWrapper>
        {!isFirst && <AniLink cover direction="left" bg={getThemeColor()} duration={0.6} to={prevPage}>← página anterior</AniLink>}
        <p>
            {currentPage} de {numPages}
        </p>
        {!isLast && <AniLink cover direction="right" bg={getThemeColor()} duration={0.6} to={nextPage}>proxima página →</AniLink>}
    </S.PaginationWrapper>
)

Pagination.propTypes = {
    isFirst: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired,
    currentPage: PropTypes.number.isRequired,
    numPage: PropTypes.number.isRequired,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string
}


export default Pagination;