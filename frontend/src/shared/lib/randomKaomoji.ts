import sample from 'lodash/sample'

export type EmojiTypes = 'forError404' | 'forHomePage';

export const randomKaomoji = (type: EmojiTypes): string => {
  let kaomojis: string[];

  switch (type) {
    case "forError404":
      kaomojis = ["o(>< )o", "☆ｏ(＞＜；)○", "┐(シ)┌", "𐔌՞. .՞𐦯", "|･ω･)"];
      break;
    case "forHomePage":
      kaomojis = ["☆ﾐ(o*･ω･)ﾉ", "o(>ω<)o", "(･ω<)☆", "___〆(・∀・)"];
      break;
    default:
      kaomojis = ["¯\\_(ツ)_/¯"];
  }

  const randomKaomojiValue = sample(kaomojis);

  return randomKaomojiValue ?? "¯\\_(ツ)_/¯";
};
