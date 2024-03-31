---
date: 2024-03-30 00:00:00
layout: post
title: 프로그래머스 방문 길이[자바]
subtitle: 프로그래머스 방문 길이 Lv2[자바]
description: 자바언어로 방문 길이
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

<a href="https://school.programmers.co.kr/learn/courses/30/lessons/49994">방문 길이</a>

## 문제 설명

> 게임 캐릭터를 4가지 명령어를 통해 움직인다.  
이때 캐릭터가 걸오온 길이를 구해라.

#### 명령어

- U : 위로 이동
- D : 아래로 이동
- L : 왼쪽으로 이동
- R : 오른쪽으로 이동
  
### 제한사항

- dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외에 문자는 주어지지 않습니다.  
- dirs의 길이는 500 이하의 자연수입니다.  

### 입출력 예

<table>
  <thead>
    <tr>
      <th>dirs</th>
      <th>answer</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>"ULURRDLLU"</td>
      <td>7</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>"LULLLLLLU"</td>
      <td>7</td>
    </tr>
  </tbody>
</table>

## 정답 코드

{% highlight java %}
import java.util.HashSet;
import java.util.HashMap;

public class EnterLength {
    public static void main(String[] args) {
        System.out.println(solution("ULURRDLLU"));
        System.out.println(solution("LULLLLLLU"));
    }

    private static boolean checkRange(int x, int y) {
        return 0 <= x && x < 11 && 0 <= y && y < 11;
    }

    private static HashMap<String, int[]> location = new HashMap<>();

    private static void init() {
        location.put("U", new int[]{0, 1});
        location.put("D", new int[]{0, -1});
        location.put("R", new int[]{1, 0});
        location.put("L", new int[]{-1, 0});
    }

    public static int solution(String s) {
        init();
        int x = 5, y = 5;
        HashSet<String> ans = new HashSet<>();
        for (int i = 0; i < s.length(); i++) {
//            System.out.println("direct = " + s.charAt(i));
//            System.out.println("location = " + location.get(s.charAt(i)));
            int[] direct = location.get(s.charAt(i));
            if (direct == null) {
                System.out.println("Undefined direction for character: " + s.charAt(i));
                continue; // 다음 반복으로 넘어갑니다.
            }
//            int nx = x + direct[0];
//            int ny = y + direct[1];
//            if (!checkRange(nx, ny)) {
//                continue;
//            }
//            ans.add(x + "  " + y + " " + nx + " " + ny);
//            ans.add(nx + "  " + ny + " " + x + " " + y);
//
//            x = nx;
//            y = ny;
        }
        return ans.size() / 2;
    }
}
{% endhighlight %}
