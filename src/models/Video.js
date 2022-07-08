import mongoose from "mongoose";

// 비디오 스키마 만들기 - 비디오 데이터 형식 지정
const videoSchema = new mongoose.Schema({
	title: String,
	description: String,
	createdAt: Date,
	hashtags: [{type: String}],
	meta: {
		vides: Number,
		rating: Number,
	}
});

// 비디오 모델 만들기
const VideoModel = mongoose.model("Video", videoSchema); // Video는 모델 이름

export default VideoModel;