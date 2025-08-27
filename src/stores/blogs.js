import { ref } from "vue";
import { defineStore } from "pinia";

export const useBlogStore = defineStore("blogStore", () => {
  const blogs = ref([
    {
      title: "KCAA APPROVED TRAINING ORGANISATIONS IN KENYA.",
      date: "December 14 2023",
      comments: 45,
      likes: 20,
      created: "2023-05-12",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab harum," +
        "doloribus id excepturi sapiente, eligendi ducimus nostrum ipsa hic",
      post: [
        {
          type: "image",
          url: "/src/assets/daniel.jpg"
        },
        {
          type: "paragraph",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium."
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/2c5K-CG6CmM"
        },
        {
          type: "title",
          text: "Conclusion"
        },
        {
          type: "paragraph",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum "
        }
      ]
    },
    {
      title: "KCAA APPROVED TRAINING ORGANISATIONS IN KENYA.",
      comments: 45,
      likes: 20,
      created: "2023-05-12",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab harum," +
        "doloribus id excepturi sapiente, eligendi ducimus nostrum ipsa hic",
      post: [
        {
          type: "image",
          url: "/src/assets/daniel.jpg"
        },
        {
          type: "paragraph",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium."
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/2c5K-CG6CmM"
        },
        {
          type: "title",
          text: "Conclusion"
        },
        {
          type: "paragraph",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum "
        }
      ]
    },
    {
      title: "KCAA APPROVED TRAINING ORGANISATIONS IN KENYA.",
      date: "December 14 2023",
      comments: 45,
      likes: 20,
      created: "2023-05-12",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ab harum," +
        "doloribus id excepturi sapiente, eligendi ducimus nostrum ipsa hic",
      post: [
        {
          type: "image",
          url: "/src/assets/daniel.jpg"
        },
        {
          type: "paragraph",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium."
        },
        {
          type: "video",
          src: "https://www.youtube.com/embed/2c5K-CG6CmM"
        },
        {
          type: "title",
          text: "Conclusion"
        },
        {
          type: "paragraph",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum " +
            "voluptatum ea labore laudantium, voluptates " +
            "magnam, doloremque sapiente dolor maxime." +
            " Fuga nisi eligendi recusandae ut architecto praesentium." +
            "Lorem ipsum dolor sit amet consectetur adipisicing " +
            "elit. Optio quos unde voluptatibus ipsum "
        }
      ]
    }
  ]);

  return { blogs };
});
