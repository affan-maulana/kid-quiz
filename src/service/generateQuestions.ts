export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5);
}

export function generateQuestions(level: number, count: number): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  
  for (let i = 0; i < count; i++) {
    let a, b, c, op1, op2, answer, questionStr;
    
    switch (level) {
      case 1:
        // Penjumlahan dua angka 1-10
        a = getRandomInt(1, 10);
        b = getRandomInt(1, 10);
        answer = a + b;
        questionStr = `${a} + ${b} =`;
        break;
        
      case 2:
        // Penjumlahan atau pengurangan dua angka 1-10
        a = getRandomInt(1, 10);
        b = getRandomInt(1, 10);
        op1 = Math.random() > 0.5 ? "+" : "-";
        // Pastikan hasil pengurangan tidak negatif
        if (op1 === "-" && a < b) {
          [a, b] = [b, a]; // Swap agar a >= b
        }
        answer = op1 === "+" ? a + b : a - b;
        questionStr = `${a} ${op1} ${b} =`;
        break;
        
      case 3:
        // Penjumlahan atau pengurangan dua angka 1-30
        a = getRandomInt(1, 30);
        b = getRandomInt(1, 30);
        op1 = Math.random() > 0.5 ? "+" : "-";
        // Pastikan hasil pengurangan tidak negatif
        if (op1 === "-" && a < b) {
          [a, b] = [b, a]; // Swap agar a >= b
        }
        answer = op1 === "+" ? a + b : a - b;
        questionStr = `${a} ${op1} ${b} =`;
        break;
        
      case 4:
        // Penjumlahan atau pengurangan tiga angka 1-10
        a = getRandomInt(1, 10);
        b = getRandomInt(1, 10);
        c = getRandomInt(1, 10);
        op1 = Math.random() > 0.5 ? "+" : "-";
        op2 = Math.random() > 0.5 ? "+" : "-";
        
        // Pastikan hasil tidak negatif dengan mengatur urutan angka
        if (op1 === "-" && a < b) {
          [a, b] = [b, a]; // Swap agar a >= b
        }
        answer = op1 === "+" ? a + b : a - b;
        
        if (op2 === "-" && answer < c) {
          // Jika hasil akan negatif, ubah operasi ke penjumlahan
          op2 = "+";
        }
        answer = op2 === "+" ? answer + c : answer - c;
        questionStr = `${a} ${op1} ${b} ${op2} ${c} =`;
        break;
        
      case 5:
        // Penjumlahan tiga angka 1-30
        a = getRandomInt(1, 30);
        b = getRandomInt(1, 30);
        c = getRandomInt(1, 30);
        answer = a + b + c;
        questionStr = `${a} + ${b} + ${c} =`;
        break;
        
      default:
        // Default ke level 1
        a = getRandomInt(1, 10);
        b = getRandomInt(1, 10);
        answer = a + b;
        questionStr = `${a} + ${b} =`;
    }
    
    // Generate 3 pilihan jawaban (1 benar + 2 salah)
    const wrongOption1 = answer + getRandomInt(1, 5);
    const wrongOption2 = answer - getRandomInt(1, 5);
    
    // Shuffle options agar jawaban benar tidak selalu di posisi sama
    const options = shuffle([
      answer.toString(),
      wrongOption1.toString(), 
      wrongOption2.toString()
    ]);
    
    const correct = options.indexOf(answer.toString());
    
    questions.push({
      question: questionStr,
      options: options,
      correct: correct,
    });
  }
  
  return questions;
}