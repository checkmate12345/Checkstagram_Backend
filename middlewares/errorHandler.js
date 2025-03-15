export default function errorHandler(err, req, res, next) {
	console.error("서버 오류 발생:", err);

	let statusCode = err.status || 500;

	const message = statusCode === 500 
    ? "서버 오류가 발생했습니다."
    : err.message;

	res.status(statusCode).json({
		success: false,
		message
	});
}  