import * as yup from "yup";

const ReviewValidation = yup.object().shape({
    comment: yup
    .string("")
    .required("Hãy Bình Luận !")
    .max(150, "Bình luận thường có khoảng 150 kí tự !"),
    rating: yup.number().required("Hãy chọn đánh giá"),
});

const movieValidation = yup.object().shape({
    name: yup
        .string()
        .required("Hãy nhập tên phim")
        .max(100,"Tên phim dài nhất 100 kí tự"),
    time: yup.number().required("Nhập thời gian phim"),
    language: yup.string().required("Nhập ngôn ngữ phim"),
    year: yup.number().required("Nhập năm sx phim"),
    category: yup.string().required("Chọn thể loại phim"),
    desc: yup
        .string()
        .required("Nhập mô tả phim")
        .max(300, "Mô tả phim dài nhất 300 kí tự"),
});

export{ReviewValidation, movieValidation }