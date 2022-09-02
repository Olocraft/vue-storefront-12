# IconBase component

BaseIcon has only one purpose, to grab content via prop and mangle it, output is icon with properly set up `viewBox` `aria-label` etc attributes

<PlaygroundWrapper component="BaseIcon"/>


## Props

| Prop name             | Type                                   | Default value | Possible values |
|-----------------------|----------------------------------------|---------------|-----------------|
| content               | String (vue), ReactElement / ReactElement [] (react)|  |                 |
| size                  | `VsfIconSize`                          | `base`        | `xs`, `sm`, `base`, `lg`, `xl`, `2xl`, `3xl` |


## Source code

<<<../../mitosis/src/blocks/VsfIconBase/VsfIconBase.lite.tsx
