import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from "./styles"

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
            query {
                avatarImage: file(relativePath: { eq: "profile_photo.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 60) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `
    )

    return <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid} className="foo" />
}

export default Avatar