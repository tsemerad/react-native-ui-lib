import React, { PureComponent } from 'react';
import { LayoutChangeEvent, ImageStyle } from 'react-native';
import { ButtonSize, ButtonAnimationDirection, ButtonProps, ButtonState, Props } from './ButtonTypes';
export { ButtonSize, ButtonAnimationDirection, ButtonProps };
declare class Button extends PureComponent<Props, ButtonState> {
    static displayName: string;
    static defaultProps: {
        iconOnRight: boolean;
    };
    static sizes: typeof ButtonSize;
    static animationDirection: typeof ButtonAnimationDirection;
    constructor(props: Props);
    state: {
        size: undefined;
    };
    styles: {
        container: {
            backgroundColor: string;
            justifyContent: "center";
            alignItems: "center";
        };
        innerContainerLink: {
            minWidth: undefined;
            paddingHorizontal: undefined;
            paddingVertical: undefined;
            borderRadius: number;
            backgroundColor: undefined;
        };
        shadowStyle: {
            shadowOffset: {
                height: number;
                width: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        text: {
            color?: import("react-native").ColorValue | undefined;
            fontFamily?: string | undefined;
            fontSize?: number | undefined;
            fontStyle?: "normal" | "italic" | undefined;
            fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined;
            letterSpacing?: number | undefined;
            lineHeight?: number | undefined;
            textAlign?: "auto" | "left" | "right" | "center" | "justify" | undefined;
            textDecorationLine?: "none" | "underline" | "line-through" | "underline line-through" | undefined;
            textDecorationStyle?: "solid" | "double" | "dotted" | "dashed" | undefined;
            textDecorationColor?: import("react-native").ColorValue | undefined;
            textShadowColor?: import("react-native").ColorValue | undefined;
            textShadowOffset?: {
                width: number;
                height: number;
            } | undefined;
            textShadowRadius?: number | undefined;
            textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | undefined;
            testID?: string | undefined;
            fontVariant?: import("react-native").FontVariant[] | undefined;
            writingDirection?: "auto" | "ltr" | "rtl" | undefined;
            backfaceVisibility?: "visible" | "hidden" | undefined;
            backgroundColor: import("react-native").ColorValue;
            borderBottomColor?: import("react-native").ColorValue | undefined;
            borderBottomEndRadius?: number | undefined;
            borderBottomLeftRadius?: number | undefined;
            borderBottomRightRadius?: number | undefined;
            borderBottomStartRadius?: number | undefined;
            borderBottomWidth?: number | undefined;
            borderColor?: import("react-native").ColorValue | undefined;
            borderEndColor?: import("react-native").ColorValue | undefined;
            borderLeftColor?: import("react-native").ColorValue | undefined;
            borderLeftWidth?: number | undefined;
            borderRadius?: number | undefined;
            borderRightColor?: import("react-native").ColorValue | undefined;
            borderRightWidth?: number | undefined;
            borderStartColor?: import("react-native").ColorValue | undefined;
            borderStyle?: "solid" | "dotted" | "dashed" | undefined;
            borderTopColor?: import("react-native").ColorValue | undefined;
            borderTopEndRadius?: number | undefined;
            borderTopLeftRadius?: number | undefined;
            borderTopRightRadius?: number | undefined;
            borderTopStartRadius?: number | undefined;
            borderTopWidth?: number | undefined;
            borderWidth?: number | undefined;
            opacity?: number | undefined;
            elevation?: number | undefined;
            alignContent?: "center" | "flex-start" | "flex-end" | "stretch" | "space-between" | "space-around" | undefined;
            alignItems?: import("react-native").FlexAlignType | undefined;
            alignSelf?: "auto" | import("react-native").FlexAlignType | undefined;
            aspectRatio?: number | undefined;
            borderEndWidth?: string | number | undefined;
            borderStartWidth?: string | number | undefined;
            bottom?: string | number | undefined;
            display?: "none" | "flex" | undefined;
            end?: string | number | undefined;
            flex: number;
            flexBasis?: string | number | undefined;
            flexDirection: "row" | "column" | "row-reverse" | "column-reverse";
            flexGrow?: number | undefined;
            flexShrink?: number | undefined;
            flexWrap?: "wrap" | "nowrap" | "wrap-reverse" | undefined;
            height?: string | number | undefined;
            justifyContent?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
            left?: string | number | undefined;
            margin?: string | number | undefined;
            marginBottom?: string | number | undefined;
            marginEnd?: string | number | undefined;
            marginHorizontal?: string | number | undefined;
            marginLeft?: string | number | undefined;
            marginRight?: string | number | undefined;
            marginStart?: string | number | undefined;
            marginTop?: string | number | undefined;
            marginVertical?: string | number | undefined;
            maxHeight?: string | number | undefined;
            maxWidth?: string | number | undefined;
            minHeight?: string | number | undefined;
            minWidth?: string | number | undefined;
            overflow?: "visible" | "hidden" | "scroll" | undefined;
            padding?: string | number | undefined;
            paddingBottom?: string | number | undefined;
            paddingEnd?: string | number | undefined;
            paddingHorizontal?: string | number | undefined;
            paddingLeft?: string | number | undefined;
            paddingRight?: string | number | undefined;
            paddingStart?: string | number | undefined;
            paddingTop?: string | number | undefined;
            paddingVertical?: string | number | undefined;
            position?: "absolute" | "relative" | undefined;
            right?: string | number | undefined;
            start?: string | number | undefined;
            top?: string | number | undefined;
            width?: string | number | undefined;
            zIndex?: number | undefined;
            direction?: "ltr" | "rtl" | "inherit" | undefined;
            shadowColor?: import("react-native").ColorValue | undefined;
            shadowOffset?: {
                width: number;
                height: number;
            } | undefined;
            shadowOpacity?: number | undefined;
            shadowRadius?: number | undefined;
            transform?: (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
            transformMatrix?: number[] | undefined;
            rotation?: number | undefined;
            scaleX?: number | undefined;
            scaleY?: number | undefined;
            translateX?: number | undefined;
            translateY?: number | undefined;
            textAlignVertical?: "auto" | "center" | "top" | "bottom" | undefined;
            includeFontPadding?: boolean | undefined;
        };
    };
    componentDidUpdate(prevProps: Props): void;
    onLayout: (event: LayoutChangeEvent) => void;
    get isOutline(): boolean;
    get isLink(): boolean | undefined;
    get isFilled(): boolean;
    get isIconButton(): boolean | 0 | undefined;
    getBackgroundColor(): any;
    getActiveBackgroundColor(): string | undefined;
    getLabelColor(): string | undefined;
    getLabelSizeStyle(): object;
    getContainerSizeStyle(): any;
    getOutlineStyle(): {
        borderWidth: number;
        borderColor: string;
    } | undefined;
    getBorderRadiusStyle(): {
        borderRadius: number;
    };
    getShadowStyle(): ({
        shadowOffset: {
            height: number;
            width: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    } | {
        shadowColor: any;
    })[] | undefined;
    getIconStyle(): import("react-native").StyleProp<ImageStyle>[];
    getAnimationDirectionStyle(): {
        alignSelf: string;
    } | undefined;
    renderIcon(): any;
    renderLabel(): JSX.Element | null;
    render(): JSX.Element;
}
export { Button };
declare const _default: React.ComponentClass<ButtonProps & {
    useCustomTheme?: boolean | undefined;
}, any> & typeof Button;
export default _default;
