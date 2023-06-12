"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[42050],{10577:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return c},default:function(){return m}});var a,o=t(87462),i=t(63366),r=(t(15007),t(64983)),l=t(91515),p=["components"],c={},u=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),s={_frontmatter:c},d=l.Z;function m(e){var n=e.components,t=(0,i.Z)(e,p);return(0,r.mdx)(d,(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"public-interfaces-and-apis"},"Public interfaces and APIs"),(0,r.mdx)("p",null,"Learn about interaces and APIs."),(0,r.mdx)("h2",{id:"what-is-an-interface"},"What is an interface?"),(0,r.mdx)("p",null,"A ",(0,r.mdx)("em",{parentName:"p"},"public interface")," is a set of code that third-party developers can call, implement, or build as a plug-in. Adobe guarantees that this code will not change in subsequent releases without a major version change."),(0,r.mdx)("p",null,"Public interfaces for a module are marked with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@api")," annotation."),(0,r.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Third-party developers should use only these interfaces, that is, interfaces with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"@api")," annotation. You can use other interfaces but those may be modified or removed in subsequent Adobe Commerce and Magento Open Source releases. For more information, see ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/contributor/guides/code-contributions/backward-compatibility-policy/"},"Backward compatibility"),"."),(0,r.mdx)("h3",{id:"example-of-public-interface-annotation"},"Example of public interface annotation"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\CatalogRule\\Api;\n\n/**\n * Interface CatalogRuleRepositoryInterface\n * @api\n * @since 100.1.0\n */\ninterface CatalogRuleRepositoryInterface\n{\n...\n")),(0,r.mdx)("h2",{id:"what-is-an-api"},"What is an API?"),(0,r.mdx)("p",null,"An application programming interface (API) is a set of interfaces and their implementations that a module provides to other modules."),(0,r.mdx)("h3",{id:"example-of-an-api-interface-implementation"},"Example of an API interface implementation"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento_CatalogRule")," module."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento\\CatalogRule\\Api\\CatalogRuleRepositoryInterface")," interface"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\CatalogRule\\Api;\n\nuse Magento\\CatalogRule\\Api\\Data\\RuleInterface;\nuse Magento\\Framework\\Exception\\CouldNotDeleteException;\nuse Magento\\Framework\\Exception\\CouldNotSaveException;\nuse Magento\\Framework\\Exception\\NoSuchEntityException;\n\n/**\n * Interface CatalogRuleRepositoryInterface\n * @api\n * @since 100.1.0\n */\ninterface CatalogRuleRepositoryInterface\n{\n    /**\n     * @param RuleInterface $rule\n     * @return RuleInterface\n     * @throws CouldNotSaveException\n     * @since 100.1.0\n     */\n    public function save(RuleInterface $rule): RuleInterface;\n\n    /**\n     * @param int $ruleId\n     * @return RuleInterface\n     * @throws NoSuchEntityException\n     * @since 100.1.0\n     */\n    public function get(int $ruleId): RuleInterface;\n\n    /**\n     * @param RuleInterface $rule\n     * @return bool\n     * @throws CouldNotDeleteException\n     * @since 100.1.0\n     */\n    public function delete(RuleInterface $rule): bool;\n\n    /**\n     * @param int $ruleId\n     * @return bool\n     * @throws CouldNotDeleteException\n     * @since 100.1.0\n     */\n    public function deleteById(int $ruleId): bool;\n}\n")),(0,r.mdx)("p",null,"An interface implementation is declared in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"di.xml")," as ",(0,r.mdx)("inlineCode",{parentName:"p"},"<preference />")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n...\n    <preference for="Magento\\CatalogRule\\Api\\CatalogRuleRepositoryInterface" type="Magento\\CatalogRule\\Model\\CatalogRuleRepository"/>\n...\n</config>\n')),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento\\CatalogRule\\Model\\CatalogRuleRepository")," implements the default methods of the",(0,r.mdx)("inlineCode",{parentName:"p"},"CatalogRuleRepositoryInterface"),":  ",(0,r.mdx)("inlineCode",{parentName:"p"},"save"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"get"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"delete"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"deleteById"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\CatalogRule\\Model;\n\nuse Magento\\CatalogRule\\Api\\Data;\nuse Magento\\Framework\\Exception\\CouldNotDeleteException;\nuse Magento\\Framework\\Exception\\CouldNotSaveException;\nuse Magento\\Framework\\Exception\\NoSuchEntityException;\nuse Magento\\Framework\\Exception\\ValidatorException;\nuse Magento\\CatalogRule\\Api\\CatalogRuleRepositoryInterface;\n\nclass CatalogRuleRepository implements CatalogRuleRepositoryInterface\n{\n    ...\n\n    /**\n     * @inheritdoc\n     */\n    public function save(Data\\RuleInterface $rule): Data\\RuleInterface\n    {\n        ...\n    }\n\n    /**\n     * @inheritdoc\n     */\n    public function get(int $ruleId): Data\\RuleInterface\n    {\n        ...\n    }\n\n    /**\n     * @inheritdoc\n     */\n    public function delete(Data\\RuleInterface $rule): bool\n    {\n        ...\n    }\n\n    /**\n     * @inheritdoc\n     */\n    public function deleteById(int $ruleId): bool\n    {\n        ...\n    }\n}\n")),(0,r.mdx)("h3",{id:"api-types"},"API types"),(0,r.mdx)("p",null,"The following items are considered types of APIs:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Directory structure"),(0,r.mdx)("li",{parentName:"ul"},"Configuration files structure"),(0,r.mdx)("li",{parentName:"ul"},"Events"),(0,r.mdx)("li",{parentName:"ul"},"Client API"),(0,r.mdx)("li",{parentName:"ul"},"Provider API (SPI)")),(0,r.mdx)("p",null,"Directory structure and configuration file structure are types of APIs because extension developers use them. Developers write configurations, and place their static files in specified folders; so if the configuration file structure or directory structure changes in subsequent releases, modules and extensions may break."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-api-concepts-md-41acd73455ca8f8e5078.js.map