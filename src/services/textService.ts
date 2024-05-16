import Text from '../models/text';

class TextService {
  static async createText(content: string) {
    const text = new Text({ content });
    await text.save();
    return text;
  }

  static async getTextById(id: string) {
    return Text.findById(id);
  }

  static async updateText(id: string, content: string) {
    return Text.findByIdAndUpdate(id, { content }, { new: true });
  }

  static async deleteText(id: string) {
    return Text.findByIdAndDelete(id);
  }

  static wordCount(content: string) {
    return content.split(/\s+/).filter(word => word).length;
  }

  static characterCount(content: string) {
    return content.replace(/\s+/g, '').length;
  }

  static sentenceCount(content: string) {
    return content.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
  }

  static paragraphCount(content: string) {
    return content.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;
  }

  static longestWord(content: string) {
    const words = content.split(/\s+/).filter(word => word);
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
  }
}

export default TextService;
