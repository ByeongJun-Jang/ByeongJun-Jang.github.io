---
date: 2024-03-28 00:00:00
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

#### 기능

~~~java
.sorted((a1, a2) -> Double.compare(a2.getValue(), a1.getValue()))
~~~
스트림의 엔트리들을 사용자 정의 비교자(comparator)로 정렬한다.  
이 비교자는 두 엔트리 a1과 a2의 값을 비교하여 내림차순으로 정렬한다.  
Double.compare(a2.getValue(), a1.getValue())는 먼저 a2의 값을 a1의 값과 비교한다.  내림차순 정렬을 위해 순서를 바꿔 비교한다.
~~~java
.mapToInt(HashMap.Entry::getKey).toArray()
~~~ 
정렬된 스트림을 mapToInt 연산을 사용하여 변환한다.  
이 연산은 각 엔트리의 키(Integer)를 정수(int)로 변환한다.  
그리고 toArray() 메소드를 사용하여 정수 스트림을 정수 배열로 변환한다.