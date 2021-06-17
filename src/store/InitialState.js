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
            title: '',
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
    }
};