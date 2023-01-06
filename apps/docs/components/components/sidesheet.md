---
layout: ComponentLayout
hideBreadcrumbs: true
---
# SideSheet

VsfSideSheet is surface containing supplementary content that is anchored to the left or right edge of the screen.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=9533%3A21245&t=lM59iSQlhO3ltAko-0)

## Props

<!-- vue -->

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|  leftSide             |  boolean                   |  true         |                                        |
|  permanent            |  boolean                   |  false        |                                        |
|  overlayVisible       |  boolean                   |  false        |                                        |
|  open                 |  boolean                   |  false        |                                        |


<!-- end vue -->

<!-- react -->

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|  leftSide             |  boolean                   |  true         |                                        |
|  permanent            |  boolean                   |  false        |                                        |
|  overlayVisible       |  boolean                   |  false        |                                        |
|  open                 |  boolean                   |  false        |                                        |
|  children             |  ReactNode                 |               |                                        |
|  className            |  String                    |               |                                        |
|  onOpenChange         |  Function                  |               |                                        |

<!-- end react -->

<!-- vue -->
## Slots

| Slot name       |            Description            |
| ---------       | :-------------------------------: |
|  default        |  place content of side sheet      |


## Events

| Event name |            Trigger               |
| ---------- | :----------------------------:   |
|  close     |  emits on clicking close button  |

<!-- end vue -->


## Accessibility notes


## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfSideSheet/VsfSideSheet.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfSideSheet/VsfSideSheet.tsx
<!-- end react -->
