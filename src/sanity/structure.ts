import type {StructureResolver} from 'sanity/structure'
import {BillIcon, CogIcon, ControlsIcon, DocumentsIcon, DocumentTextIcon, FolderIcon, PackageIcon, SearchIcon, TagsIcon, TrolleyIcon, VersionsIcon} from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.documentTypeListItem("page").title("Pages").icon(DocumentsIcon),    
      S.divider(),

      // Blog & Events
      S.listItem()
        .id('blogEvents')
        .title('Blog Posts & Events')
        .icon(FolderIcon)
        .child(
          S.list()
            .title('Blog & Events')
            .items([
              S.documentTypeListItem("blogPost").title("Blog Posts"),
              S.listItem()
                .id("blog")
                .schemaType("blog")
                .title("Blog Page")
                .icon(DocumentTextIcon)
                .child(
                  S.document()
                    .id("blog")
                    .schemaType("blog")
                    .documentId("blog")
                    .title("Blog")
                ),
              S.divider(),
              S.documentTypeListItem("events").title("Events"),
              S.listItem()
                .id("event")
                .schemaType("event")
                .title("Events Page")
                .icon(DocumentTextIcon)
                .child(
                  S.document()
                    .id("event")
                    .schemaType("event")
                    .documentId("event")
                    .title("Events")
                ),
            ])
        ),

      S.listItem()
        .id('global')
        .title('Global Components')
        .icon(VersionsIcon)
        .child(
          S.list()
            .title('Global Content')
            .items([
              S.documentTypeListItem("contactForm").title("Contact Form"),
              S.documentTypeListItem("faq").title("FAQ"),
              S.documentTypeListItem("team").title("Team Members"),
            ])
        ),

      S.listItem()
      .id('productContent')
      .title('Products')
      .icon(TagsIcon)
      .child(
        S.list()
          .title('Product Content')
          .items([
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("collection").title("Collections"),
              S.divider(),
              S.documentTypeListItem("product").title("Products"),
              S.listItem()
              .id("shop")
              .schemaType("shop")
              .title("Shop Page")
              .icon(PackageIcon)
              .child(
                S.document()
                  .id("shop")
                  .schemaType("shop")
                  .documentId("shop")
                  .title("Shop")
              ),
          ])
      ),

      S.divider(),

      // Site Configuration
      S.listItem()
        .id('siteConfig')
        .title('Site Configuration')
        .icon(ControlsIcon)
        .child(
          S.list()
            .title('Site Configuration')
            .items([
              S.listItem()
                .id("cart")
                .schemaType("cart")
                .title("Cart")
                .icon(TrolleyIcon)
                .child(
                  S.document()
                    .id("cart")
                    .schemaType("cart")
                    .documentId("cart")
                    .title("Cart")
                ),
              S.listItem()
                .id("checkout")
                .schemaType("checkout")
                .title("Checkout")
                .icon(BillIcon)
                .child(
                  S.document()
                    .id("checkout")
                    .schemaType("checkout")
                    .documentId("checkout")
                    .title("Checkout")
                ),
              S.documentTypeListItem("menu").title("Menus"),
              S.listItem()
                .id("search")
                .schemaType("search")
                .title("Search")
                .icon(SearchIcon)
                .child(
                  S.document()
                    .id("search")
                    .schemaType("search")
                    .documentId("search")
                    .title("Search")
                ),
              S.listItem()
                .id("siteSettings")
                .schemaType("siteSettings")
                .title("Site Settings")
                .icon(CogIcon)
                .child(
                  S.document()
                    .id("siteSettings")
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                    .title("Site Settings")
                ),
            ])
        ),

      
    ])