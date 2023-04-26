import styled, { keyframes } from 'styled-components';

const fly = keyframes`
  0% {transform: translateY(0);}
  25% {transform: translateY(-10px);}
  50% {transform: translateY(0);}
  75% {transform: translateY(10px);}
  100% {transform: translateY(0);}
`;

const up = keyframes`
  20% {opacity: 0.7;}
  35% {left: 100px opacity: 0.7;}
  70% {left: 70px  opacity: 0;}
`;

export const AirplaneAnimation = styled.div`
	position: relative;
	width: 100%;
	height: 400px;
	overflow: hidden;
`;

export const PlaneContainer = styled.div`
	position: relative;
	left: 0;
	top: 10px;
	animation: ${fly} 2s linear infinite;
`;

export const Main = styled.div`
	position: absolute;
	width: 325px;
	height: 60px;
	background-color: #fafafa;
	top: 100px;
	left: 100px;
	border-radius: 0 100px 30px 100px;
	overflow: hidden;
	box-shadow: inset -10px -10px rgba(0, 0, 0, 0.2);
	z-index: 2;
`;

export const MainBeforeAfter = styled.div`
	position: absolute;
	background-color: #2c64b7;
	top: 10px;
`;

export const MainBefore = styled(MainBeforeAfter)`
	width: 40px;
	height: 10px;
	border-radius: 0 0 0 30px;
	left: 255px;
`;

export const MainAfter = styled(MainBeforeAfter)`
	width: 5px;
	height: 10px;
	border-radius: 20px;
	left: 215px;
	box-shadow: -10px 0 #fdc921, -20px 0 #fdc921, -30px 0 #fdc921, -40px 0 #fdc921,
		-50px 0 #fdc921, -60px 0 #fdc921, -70px 0 #fdc921, -80px 0 #fdc921,
		-90px 0 #fdc921, -100px 0 #fdc921, -110px 0 #fdc921, -120px 0 #fdc921;
`;

export const WingOne = styled.div`
	position: absolute;
	width: 35px;
	border-right: 20px solid transparent;
	border-left: 20px solid transparent;
	border-top: 80px solid #0077b6;
	height: 0;
	top: 120px;
	left: 160px;
	transform: skew(-45deg) rotateX(30deg);
	z-index: 4;
`;

export const WingTwo = styled.div`
	position: absolute;
	width: 35px;
	border-right: 20px solid transparent;
	border-left: 20px solid transparent;
	border-bottom: 80px solid #023e8a;
	height: 0;
	top: 55px;
	left: 160px;
	transform: skew(45deg) rotateX(30deg);
`;

export const WingTwoAfter = styled.div`
	content: '';
	position: absolute;
	width: 20px;
	border-right: 15px solid transparent;
	border-left: 15px solid transparent;
	border-bottom: 35px solid #2c64b7;
	height: 0;
	left: -100px;
	top: 29px;
`;

export const WingOneAfter = styled.div`
	content: '';
	position: absolute;
	width: 20px;
	height: 25px;
	background-color: #0077b6;
	top: -105px;
	left: -140px;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

export const WingTwoBefore = styled.div`
	content: '';
	position: absolute;
	width: 20px;
	height: 25px;
	background-color: #023e8a;
	left: -80px;
	top: 35px;
	transform: skew(-55deg);
`;

export const Pollution = styled.div`
	position: absolute;
	background-color: #fff;
	top: 130px;
	left: 65px;
	width: 30px;
	height: 10px;
	border-radius: 20px;
	opacity: 0;
	animation: up 1s linear infinite;
`;

export const PollutionBefore = styled.div`
	content: '';
	position: absolute;
	background-color: #fff;
	border-radius: 20px;
	opacity: 0;
	width: 30px;
	height: 10px;
`;

export const PollutionAfter = styled(PollutionBefore)`
	top: 10px;
	left: -25px;
	animation: up 2s linear infinite;
`;

export const PollutionBefore2 = styled(PollutionBefore)`
	top: -10px;
	left: -35px;
	animation: up 3s linear infinite;
`;
