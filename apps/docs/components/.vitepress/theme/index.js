import Theme from 'vitepress/theme'
import PlaygroundWrapper from '../components/PlaygroundWrapper.vue'
import AlertBase from '../components/AlertBase.vue'
import VsfCheckbox from '../components/VsfCheckbox.vue'
import VsfBreadcrumbs from '../components/VsfBreadcrumbs.vue'
import VsfRating from '../components/VsfRating.vue'
import VsfRatingButton from '../components/VsfRatingButton.vue'
import VsfSelect from '../components/VsfSelect.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component('PlaygroundWrapper', PlaygroundWrapper),
    app.component('AlertBase', AlertBase),
    app.component('Checkbox', VsfCheckbox),
    app.component('Breadcrumbs', VsfBreadcrumbs),
    app.component('Rating', VsfRating),
    app.component('RatingButton', VsfRatingButton)
    app.component('Select', VsfSelect);
  }
}