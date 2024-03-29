---
date: 2024-03-29 00:00:00
layout: post
title: 자바 HashMap 스트림 활용해 내림차순 정렬
subtitle: HashMap 스트림 활용해 내림차순 정렬
description: 자바로 HashMap 스트림 활용해 내림차순 정렬
image: /assets/img/Taking.jpeg
optimized_image: /assets/img/Taking.jpeg
category: java
tags:
  - java
  - method
author: byeongjunjang
paginate: true
---

# HashMap 스트림 활용해 내림차순 정렬

> 프로그래머스 실패율 문제를 풀면서 어떻게 성능을 높일까하다  
api를 활용하면 성능이 오르는 것을 알았다.

### 코드

{% highlight java %}
    HashMap<Integer, Double> failure = new HashMap<>();

    return failure.entrySet().stream().sorted((a1, a2) -> Double.compare(a2.getValue(), a1.getValue()))
                .mapToInt(HashMap.Entry::getKey).toArray();
{% endhighlight %}

### 참고 레퍼런스

[Optional 바르게 쓰기](https://homoefficio.github.io/2019/10/03/Java-Optional-%EB%B0%94%EB%A5%B4%EA%B2%8C-%EC%93%B0%EA%B8%B0/)