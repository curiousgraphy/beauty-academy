// GitHub Pages 등 하위 경로 배포 시 정적 자산 경로 앞에 붙일 base path.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** 로컬 정적 자산(public) 경로에 base path를 적용한다. */
export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}

// next/image의 placeholder="blur"에 사용할 공용 blurDataURL.
// (실제 이미지 교체 전까지 사용하는 어두운 톤 단색 blur)
export const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAALCAABAAEBAREA/8QAFAABAAAAAAAAAAAAAAAAAAAAAP/EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEAAD8AfwD/2Q==";
