<template lang="pug">
.container.blog 
    .grid
        .col-12 
            header
                h1 {{ title }}
                h2 Posted by yussan - 24 Oct 2017 12:00
    .grid.blog-content     
        .col-8_sm-12
            //- content
            img(src='/images/thumb.png')

            .m-sm

            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in eros erat. Nunc tempor vitae risus non euismod. Praesent lobortis nunc enim, at elementum nisl dapibus nec. Phasellus egestas ullamcorper est, in interdum lectus ullamcorper ut. Proin sed mollis quam, eget interdum diam. Nullam id gravida nisl, quis elementum lacus. Donec maximus velit eu odio molestie lacinia laoreet at sem.

            p In hac habitasse platea dictumst. Nam non augue tempus, gravida turpis et, imperdiet velit. Curabitur vel nulla ac arcu sodales fermentum in id libero. Donec lobortis justo id neque suscipit, eget vulputate leo vulputate. Sed ultrices malesuada dui ut vestibulum. Praesent commodo pellentesque ex, tempus accumsan nisl consequat vel. Etiam dolor lacus, tempus nec lacus ac, rhoncus tempus libero. Suspendisse eu est iaculis erat dapibus gravida id at eros. Aenean ultrices, diam eget euismod efficitur, lectus diam ultrices lacus, sed mollis mauris orci sed tortor.

            p Proin condimentum condimentum justo vel porta. Sed scelerisque neque at turpis volutpat auctor. Etiam et dignissim ligula. Maecenas sed velit eu tellus euismod porta. Mauris euismod lacus id lacus vulputate, eu dictum enim tincidunt. Donec pharetra volutpat nibh, eget commodo est laoreet sit amet. Duis sodales nisl eget ligula aliquam, commodo maximus turpis commodo. Sed varius, arcu nec laoreet cursus, est nisi porttitor nulla, eget eleifend arcu purus accumsan lorem. Aenean sodales lobortis ligula consequat maximus. Morbi aliquet mollis velit a congue. Nulla at fringilla nisl. Maecenas ultricies, risus et posuere dapibus, nibh mi scelerisque tellus, eget scelerisque quam ex non tortor. Nam ullamcorper aliquet tristique. Sed id porta elit. Duis venenatis augue sit amet rhoncus tincidunt. Etiam tempus, purus vel laoreet ultrices, dolor sapien mattis est, volutpat convallis purus felis nec mi.

            p Sed placerat diam sit amet fringilla euismod. Integer at erat vitae velit condimentum ultrices. Nulla sed urna quis erat vulputate tincidunt. Mauris eu lectus leo. Praesent condimentum iaculis maximus. Mauris porttitor diam et auctor aliquet. Duis vulputate sapien neque, in semper velit fermentum in.

            p In a ligula id tortor suscipit lobortis non eu urna. Fusce dictum mauris vel orci commodo, placerat porta dui feugiat. Fusce nunc mauris, tempus et dui id, semper lacinia tortor. Cras id quam mauris. Etiam rutrum purus at ex rhoncus, fermentum lacinia odio laoreet. Suspendisse neque metus, consequat id hendrerit vitae, tristique vel sem. Donec placerat consectetur metus, sit amet viverra sapien feugiat id. Aenean id sapien orci.
            //- end of content
        .col-4_sm-12
            .grid
              each n, key in [1,2,3,4]
                card(:key=key size='large')
</template>
<script>
import Vue from 'vue'
import { toCamelCase } from 'string-manager'
import card from '../../components/card-blog.vue'
import firebase from '../../helpers/firebase'

Vue.component('card', card)

export default {
  name: 'blog-detail',
  props: ['params_title', 'params_id'],
  data() {
      return {
          title: toCamelCase(this.params_title)
      }
  },
  watch: {
      params_title(new_val) {
          this.title = toCamelCase(new_val)
      }
  },
  created()
  {
    
  }
}
</script>
