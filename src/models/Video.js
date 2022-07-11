import mongoose from "mongoose";

// 비디오 스키마 만들기 - 비디오 데이터 형식 지정
const videoSchema = new mongoose.Schema({
	title: { type: String, required:true, trim: true, maxLength: 80},
	description: { type: String, required: true, trim: true, minLength: 10},
	createdAt: { type: Date, required: true, default: Date.now},
	hashtags: [{type: String, trim:true}],
	meta: {
		views: {type: Number, dafualt: 0},
		rating: {type: Number, defualt: 0},
	}
});

// 비디오 모델 만들기
const VideoModel = mongoose.model("Video", videoSchema); // Video는 모델 이름

export default VideoModel;