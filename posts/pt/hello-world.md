---
title: Olá Mundo
date: 2022-06-05
tags: [lorem, ipsum, dolor, sit, amet]
draft: false
---

# Olá Mundo

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod ante augue, non pulvinar dolor finibus eget. Donec cursus blandit felis non venenatis. Pellentesque pretium nulla magna, `eget ultrices urna accumsan et. Duis eu suscipit dolor, quis convallis lacus`. Praesent non mattis justo. Fusce est leo, consequat et tincidunt in, pretium ut nulla. Ut bibendum eu nulla ut scelerisque. Etiam condimentum, nisi ut convallis pellentesque, urna sem imperdiet ligula, in pretium urna tellus quis ex. Sed id tortor libero.

## Sed sodales tortor

Sed sodales tortor id laoreet ultrices. Praesent iaculis lacus quis lacus aliquam malesuada. Integer vulputate, lectus in fringilla bibendum, nulla enim rutrum urna, ut porttitor tellus ex pharetra nunc. Vestibulum quis dui volutpat, aliquet urna dapibus, congue lectus. Nunc laoreet, leo sit amet pharetra varius, ligula lacus fermentum enim, tincidunt pulvinar magna nibh venenatis lacus. Vivamus facilisis urna orci, et tempus ante malesuada sed. Donec vel ipsum est. Nulla facilisi. Vestibulum in molestie orci, ut molestie sapien. Proin et egestas quam. Suspendisse nec purus enim. Pellentesque gravida orci in leo molestie, eu scelerisque eros elementum.

## Nunc sem felis

Nunc sem felis, congue in rutrum quis, lacinia et dui. Aliquam fermentum rutrum magna, at sodales turpis sodales quis. Donec sollicitudin, ligula quis tempus facilisis, nunc odio imperdiet arcu, a ullamcorper justo tellus quis nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean cursus hendrerit felis, ut congue lectus tincidunt a. Duis libero est, pharetra quis ullamcorper et, tincidunt vel est. Cras sodales ante a ipsum laoreet, sed sodales nisl tristique. Curabitur tempor gravida ante vitae dictum. Aenean egestas euismod nunc, at euismod dui maximus nec. Nunc congue leo mauris, eu feugiat erat accumsan et. Curabitur ac elementum justo, quis congue sapien.

### Nunc accumsan ante

Nunc accumsan ante arcu, eget feugiat velit posuere at. Donec auctor ex quis ex gravida faucibus at eu tortor. Sed et nisi a nisl convallis elementum. Nullam id sem pharetra, lobortis risus ac, auctor felis. Mauris lobortis sollicitudin neque eu luctus. Cras consectetur augue enim, vitae bibendum urna dapibus vel. Sed in tincidunt lorem, nec congue turpis. Suspendisse sit amet varius nunc, et feugiat velit. Aliquam posuere non nulla bibendum cursus. Quisque vel consectetur libero. Fusce eget nisi vel ligula molestie iaculis. Aenean a ultrices urna.

```tsx
export const getStaticPaths: GetStaticPaths<PostParams> = async () => {
  const posts = await getSlugs();

  const paths = posts.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
```

Nunc fermentum, ante ac dapibus faucibus, eros ante placerat tellus, ac egestas eros est sed quam. Vestibulum venenatis tellus at ipsum mattis blandit. Suspendisse vitae sollicitudin magna. Cras interdum, ipsum a placerat ultrices, libero nulla mollis sem, sed tempor metus est eget felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis molestie aliquet augue at efficitur. Fusce porttitor vel augue a viverra. Morbi pharetra varius metus quis rhoncus. Sed sed est ante.
