export default {
    course:{
        courseList: [],
        selectedCourse: {
            title: {rendered:''},
            acf: {img: ''},
            id: null
        },
    },
    lesson:{
      lessonList: [
          {
            id: null,  
            title: {rendered: ''},
            subsectionList: [
                {
                    id: null,
                    title: '',
                    content: ''
                }
            ],
            taskList: [
                {
                    id: null,
                    title: '',
                    content: ''
                }
            ]
          }
      ],
      indexSelectedLesson: null,
      selectedID: null
    }
};