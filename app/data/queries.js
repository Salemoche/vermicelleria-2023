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
                }
                hideOnScreens
              }
            }
            sectionItems {
              ... on sectionItems_imageBlock_BlockType {
                image {
                  url
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