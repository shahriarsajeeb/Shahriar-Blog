type PageType = {
    id: string | number;
    config: any;
    depth: number;
    parentId: null;
    pageUrl: string;
    attributeSetId: null;
    localizeInfos: {
      en_US: {
        title: string;
        menuTitle: string;
        htmlContent: string;
        plainContent: string;
      };
    };
    position: number;
    isVisible: boolean;
    products: number;
    childrenCount: number;
    type: string;
    templateIdentifier: null;
    isSync: boolean;
    attributeValues: {};
  };
  
  type footerValueType = {
    index: string;
    header: string;
    htmlValue: string;
    plainValue: string;
  };