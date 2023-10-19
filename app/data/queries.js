import { gql } from "@apollo/client";

export const CONTENT_QUERY = gql `
  query MyQuery {
    entry(title: "home") {
      ... on home_home_Entry {
        landingImage {
          url
        }
        landingImageMobile {
          url
        }
        mainContent {
          ... on mainContent_contentSection_BlockType {
            sectionId
            sectionMode
            gallery {
              ... on gallery_galleryTab_BlockType {
                tabName
                galleryImage {
                  url
                  alt
                  width
                  height
                  small_url: url(transform: "small")
                  small_width: width(transform: "small")
                  small_height: height(transform: "small")
                  medium_url: url(transform: "medium")
                  medium_width: width(transform: "medium")
                  medium_height: height(transform: "medium")
                  large_url: url(transform: "large")
                  large_width: width(transform: "large")
                  large_height: height(transform: "large")
                  extraLarge_url: url(transform: "extraLarge")
                  extraLarge_width: width(transform: "extraLarge")
                  extraLarge_height: height(transform: "extraLarge")
                }
                hideOnScreens
              }
            }
            sectionItems {
              ... on sectionItems_imageBlock_BlockType {
                image {
                  url
                  alt
                  width
                  height
                  small_url: url(transform: "small")
                  small_width: width(transform: "small")
                  small_height: height(transform: "small")
                  medium_url: url(transform: "medium")
                  medium_width: width(transform: "medium")
                  medium_height: height(transform: "medium")
                  large_url: url(transform: "large")
                  large_width: width(transform: "large")
                  large_height: height(transform: "large")
                  extraLarge_url: url(transform: "extraLarge")
                  extraLarge_width: width(transform: "extraLarge")
                  extraLarge_height: height(transform: "extraLarge")
                }
                aspectRatio
                width
                hideOnScreens
                extraSpace
              }
              ... on sectionItems_imageText_BlockType {
                text
                hideOnScreens
              }
            }
          }
        }
        footerLeft
        footerRight
      },
    },
    globalSet {
      ... on settings_GlobalSet {
        email
        date
        time
      }
    }
  }
  
`