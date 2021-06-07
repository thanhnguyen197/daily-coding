/// For png
declare module '*.png' {
    const image: string;
    export default image;
}

// For svg
declare module '*.svg' {
    const svg: string;
    export default svg;
}

// For SCSS
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
