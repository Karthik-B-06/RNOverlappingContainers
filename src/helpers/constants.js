import { Dimensions } from "react-native";

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

export const TOP_IMAGE_HEIGHT = 450;
export const TOP_HEADER_HEIGHT = 100;
export const SCROLL_DISTANCE = TOP_IMAGE_HEIGHT - TOP_IMAGE_HEIGHT;