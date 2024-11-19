// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type ArticleDocumentDataSlicesSlice = HerpSlice | ArticleSlice;

/**
 * Content for article documents
 */
interface ArticleDocumentData {
  /**
   * Slice Zone field in *article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ArticleDocumentDataSlicesSlice> /**
   * Meta Title field in *article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: article.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: article.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;

type LandingpageDocumentDataSlicesSlice = HerpSlice;

/**
 * Content for landingPage documents
 */
interface LandingpageDocumentData {
  /**
   * Slice Zone field in *landingPage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: landingpage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LandingpageDocumentDataSlicesSlice> /**
   * Meta Title field in *landingPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: landingpage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *landingPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: landingpage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *landingPage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landingpage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * landingPage document from Prismic
 *
 * - **API ID**: `landingpage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LandingpageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<LandingpageDocumentData>,
    "landingpage",
    Lang
  >;

type PortfoliopageDocumentDataSlicesSlice =
  | ListKeyValueSlice
  | ArtickeGistSlice;

/**
 * Content for PortfolioPage documents
 */
interface PortfoliopageDocumentData {
  /**
   * Slice Zone field in *PortfolioPage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: portfoliopage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PortfoliopageDocumentDataSlicesSlice> /**
   * Meta Title field in *PortfolioPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: portfoliopage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *PortfolioPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: portfoliopage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *PortfolioPage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: portfoliopage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * PortfolioPage document from Prismic
 *
 * - **API ID**: `portfoliopage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PortfoliopageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<PortfoliopageDocumentData>,
    "portfoliopage",
    Lang
  >;

type ProductDocumentDataSlicesSlice = never;

/**
 * Content for Product documents
 */
interface ProductDocumentData {
  /**
   * Slice Zone field in *Product*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: product.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProductDocumentDataSlicesSlice> /**
   * Meta Title field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: product.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: product.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Product*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: product.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Product document from Prismic
 *
 * - **API ID**: `product`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProductDocumentData>,
    "product",
    Lang
  >;

/**
 * Item in *setting → NavItem*
 */
export interface SettingDocumentDataNavitemItem {
  /**
   * navLink field in *setting → NavItem*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.navitem[].navlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  navlink: prismic.LinkField;

  /**
   * navText field in *setting → NavItem*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.navitem[].navtext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  navtext: prismic.KeyTextField;
}

type SettingDocumentDataSlicesSlice = ArticleSlice;

/**
 * Content for setting documents
 */
interface SettingDocumentData {
  /**
   * Name field in *setting*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * NavItem field in *setting*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.navitem[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navitem: prismic.GroupField<Simplify<SettingDocumentDataNavitemItem>>;

  /**
   * CtaLink field in *setting*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.ctalink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  ctalink: prismic.LinkField;

  /**
   * TwitterLink field in *setting*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.twitterlink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  twitterlink: prismic.LinkField;

  /**
   * LinkdinLink field in *setting*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.linkdinlink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkdinlink: prismic.LinkField;

  /**
   * GithubLink field in *setting*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.githublink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  githublink: prismic.LinkField;

  /**
   * Slice Zone field in *setting*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SettingDocumentDataSlicesSlice> /**
   * description field in *setting*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.description
   * - **Tab**: Seo and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  description: prismic.KeyTextField;

  /**
   * image field in *setting*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.image
   * - **Tab**: Seo and Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * title field in *setting*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: setting.title
   * - **Tab**: Seo and Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * setting document from Prismic
 *
 * - **API ID**: `setting`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingDocumentData>,
    "setting",
    Lang
  >;

export type AllDocumentTypes =
  | ArticleDocument
  | LandingpageDocument
  | PortfoliopageDocument
  | ProductDocument
  | SettingDocument;

/**
 * Primary content in *ArtickeGist → Default → Primary*
 */
export interface ArtickeGistSliceDefaultPrimary {
  /**
   * ArticleImage field in *ArtickeGist → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: articke_gist.default.primary.articleimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  articleimage: prismic.ImageField<never>;

  /**
   * ArticleText field in *ArtickeGist → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articke_gist.default.primary.articletext
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  articletext: prismic.RichTextField;

  /**
   * ArticleButtonLink field in *ArtickeGist → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: articke_gist.default.primary.articlebuttonlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  articlebuttonlink: prismic.LinkField;

  /**
   * ArticleButtonText field in *ArtickeGist → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articke_gist.default.primary.articlebuttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  articlebuttontext: prismic.KeyTextField;

  /**
   * Title field in *ArtickeGist → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: articke_gist.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for ArtickeGist Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArtickeGistSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ArtickeGistSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ArtickeGist*
 */
type ArtickeGistSliceVariation = ArtickeGistSliceDefault;

/**
 * ArtickeGist Shared Slice
 *
 * - **API ID**: `articke_gist`
 * - **Description**: ArtickeGist
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArtickeGistSlice = prismic.SharedSlice<
  "articke_gist",
  ArtickeGistSliceVariation
>;

/**
 * Primary content in *Article → Default → Primary*
 */
export interface ArticleSliceDefaultPrimary {
  /**
   * artickeImage field in *Article → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.default.primary.artickeimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  artickeimage: prismic.ImageField<never>;

  /**
   * Title field in *Article → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *Article → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for Article Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ArticleSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Article*
 */
type ArticleSliceVariation = ArticleSliceDefault;

/**
 * Article Shared Slice
 *
 * - **API ID**: `article`
 * - **Description**: Article
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ArticleSlice = prismic.SharedSlice<
  "article",
  ArticleSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HerpSliceDefaultPrimary {
  /**
   * firstName field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Pouria
   * - **API ID Path**: herp.default.primary.firstname
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  firstname: prismic.KeyTextField;

  /**
   * lastName field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Kalantari
   * - **API ID Path**: herp.default.primary.lastname
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  lastname: prismic.KeyTextField;

  /**
   * title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Fronend
   * - **API ID Path**: herp.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HerpSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HerpSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HerpSliceVariation = HerpSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `herp`
 * - **Description**: Herp
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HerpSlice = prismic.SharedSlice<"herp", HerpSliceVariation>;

/**
 * Item in *ListKeyValue → Default → Primary → List*
 */
export interface ListKeyValueSliceDefaultPrimaryListItem {
  /**
   * name field in *ListKeyValue → Default → Primary → List*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: list_key_value.default.primary.list[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * image field in *ListKeyValue → Default → Primary → List*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: list_key_value.default.primary.list[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * color field in *ListKeyValue → Default → Primary → List*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: list_key_value.default.primary.list[].color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  color: prismic.ColorField;

  /**
   * link field in *ListKeyValue → Default → Primary → List*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: list_key_value.default.primary.list[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Primary content in *ListKeyValue → Default → Primary*
 */
export interface ListKeyValueSliceDefaultPrimary {
  /**
   * List field in *ListKeyValue → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: list_key_value.default.primary.list[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  list: prismic.GroupField<Simplify<ListKeyValueSliceDefaultPrimaryListItem>>;

  /**
   * title field in *ListKeyValue → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: list_key_value.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for ListKeyValue Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListKeyValueSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ListKeyValueSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ListKeyValue*
 */
type ListKeyValueSliceVariation = ListKeyValueSliceDefault;

/**
 * ListKeyValue Shared Slice
 *
 * - **API ID**: `list_key_value`
 * - **Description**: ListKeyValue
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ListKeyValueSlice = prismic.SharedSlice<
  "list_key_value",
  ListKeyValueSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ArticleDocument,
      ArticleDocumentData,
      ArticleDocumentDataSlicesSlice,
      LandingpageDocument,
      LandingpageDocumentData,
      LandingpageDocumentDataSlicesSlice,
      PortfoliopageDocument,
      PortfoliopageDocumentData,
      PortfoliopageDocumentDataSlicesSlice,
      ProductDocument,
      ProductDocumentData,
      ProductDocumentDataSlicesSlice,
      SettingDocument,
      SettingDocumentData,
      SettingDocumentDataNavitemItem,
      SettingDocumentDataSlicesSlice,
      AllDocumentTypes,
      ArtickeGistSlice,
      ArtickeGistSliceDefaultPrimary,
      ArtickeGistSliceVariation,
      ArtickeGistSliceDefault,
      ArticleSlice,
      ArticleSliceDefaultPrimary,
      ArticleSliceVariation,
      ArticleSliceDefault,
      HerpSlice,
      HerpSliceDefaultPrimary,
      HerpSliceVariation,
      HerpSliceDefault,
      ListKeyValueSlice,
      ListKeyValueSliceDefaultPrimaryListItem,
      ListKeyValueSliceDefaultPrimary,
      ListKeyValueSliceVariation,
      ListKeyValueSliceDefault,
    };
  }
}
