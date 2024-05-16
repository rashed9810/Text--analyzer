document.addEventListener("DOMContentLoaded", function() {
    const analyzeBtn = document.getElementById("analyze-btn");

    analyzeBtn.addEventListener("click", function() {
        const text = document.getElementById("text-input").value;
        const wordCount = countWords(text);
        const charCount = countCharacters(text);
        const sentenceCount = countSentences(text);
        const paragraphCount = countParagraphs(text);
        const longestWord = findLongestWord(text);

        document.getElementById("word-count").textContent = wordCount;
        document.getElementById("char-count").textContent = charCount;
        document.getElementById("sentence-count").textContent = sentenceCount;
        document.getElementById("paragraph-count").textContent = paragraphCount;
        document.getElementById("longest-word").textContent = longestWord;
    });

    function countWords(text) {
        return text.trim().split(/\s+/).length;
    }

    function countCharacters(text) {
        return text.length;
    }

    function countSentences(text) {
        return text.split(/[.!?]+/).filter(Boolean).length;
    }

    function countParagraphs(text) {
        return text.split(/\n+/).filter(Boolean).length;
    }

    function findLongestWord(text) {
        const words = text.split(/\s+/);
        let longestWord = "";
        words.forEach(word => {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        });
        return longestWord;
    }
});

