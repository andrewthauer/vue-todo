export const randomId = () => `${Date.now().toString()}-${Math.random()}`;
export const isTextValid = (text: string): boolean => !!text && text.length > 0;
