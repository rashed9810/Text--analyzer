import mongoose from 'mongoose';
import TextService from '../services/textService';
import Text from '../models/text';

beforeAll(async () => {
  const mongoUri = 'mongodb://localhost:27017/text-analyzer-test';
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('TextService', () => {
  beforeEach(async () => {
    await Text.deleteMany({});
  });

  it('should create a text document', async () => {
    const content = 'Hello world!';
    const text = await TextService.createText(content);
    expect(text.content).toBe(content);
  });

  it('should get a text document by ID', async () => {
    const content = 'Hello world!';
    const createdText = await TextService.createText(content);
    const fetchedText = await TextService.getTextById(createdText._id.toString()); 
    expect(fetchedText?.content).toBe(content); 

  it('should update a text document', async () => {
    const content = 'Hello world!';
    const updatedContent = 'Updated content';
    const createdText = await TextService.createText(content);
    const updatedText = await TextService.updateText(createdText._id.toString(), updatedContent);
    expect(updatedText?.content).toBe(updatedContent);
  });

  it('should delete a text document', async () => {
    const content = 'Hello world!';
    const createdText = await TextService.createText(content);
    await TextService.deleteText(createdText._id.toString());
    const fetchedText = await TextService.getTextById(createdText._id.toString());
    expect(fetchedText).toBeNull();
  });

  it('should count words in a text', () => {
    const content = 'Hello world!';
    const count = TextService.wordCount(content);
    expect(count).toBe(2);
  });

  it('should count characters in a text', () => {
    const content = 'Hello world!';
    const count = TextService.characterCount(content);
    expect(count).toBe(10); 
  });

  it('should count sentences in a text', () => {
    const content = 'Hello world! How are you?';
    const count = TextService.sentenceCount(content);
    expect(count).toBe(2);
  });

  it('should count paragraphs in a text', () => {
    const content = 'Hello world!\nHow are you?';
    const count = TextService.paragraphCount(content);
    expect(count).toBe(2);
  });

  it('should find the longest word in a text', () => {
    const content = 'Hello world!';
    const longestWord = TextService.longestWord(content);
    expect(longestWord).toBe('Hello');
  });
});
