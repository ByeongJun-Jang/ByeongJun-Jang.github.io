---
date: 2024-04-10 00:00:00
layout: post
title: 프로그래머스 크레인 인형뽑기 게임[자바]
subtitle: 프로그래머스 크레인 인형뽑기 게임 Lv1[자바]
description: 자바 프로그래머스
image: /assets/img/programmers1.png
optimized_image: /assets/img/programmers.png
category: algorithm
tags:
  - study
  - java
  - algorithm
author: byeongjunjang
paginate: true
---

<a href="https://school.programmers.co.kr/learn/courses/30/lessons/64061">크레인 인형뽑기 게임</a>  

## 정답 코드

{% highlight java %}
import java.util.Stack;

    public static int solution(int[][] board, int[] moves) {
        int answer = 0;
        Stack<Integer> st = new Stack<>();
        for (int move : moves) {
            for (int i = 0; i < board.length; i++){
                int doll = board[i][move-1];
                if (doll != 0){
                    if(!st.isEmpty() && st.peek() == doll){
                        st.pop();
                        answer +=2;
                    }else{
                        st.push(doll);
                    }
                    board[i][move-1] = 0;
                    break;
                }
            }
        }
    }

{% endhighlight %}