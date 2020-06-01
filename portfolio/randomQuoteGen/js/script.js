

$('#container').hide();

function randomQuotes() {
  const quotes = [
    `"If you want to achieve greatness stop asking for permission." <span class="author">-- Anonymous</span>`,
    `"Things work out best for those who make the best of how things work out." <span class="author">-- John Wooden</span>`,
    `"To live a creative life, we must lose our fear of being wrong." <span class="author">-- Anonymous</span>`,
    `"If you are not willing to risk the usual you will have to settle for the ordinary." <span class="author">-- Jim Rohn</span>`,
    `"Trust because you are willing to accept the risk, not because it's safe or certain." <span class="author">-- Anonymous</span>`,
    `"Take up one idea. Make that one idea your life--think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success." <span class="author">-- Swami Vivekananda</span>`,
    `"All our dreams can come true if we have the courage to pursue them." <span class="author">-- Walt Disney</span>`,
    `"Good things come to people who wait, but better things come to those who go out and get them." <span class="author">-- Anonymous</span>`,
    `"If you do what you always did, you will get what you always got." <span class="author">-- Anonymous</span>`,
    `"Success is walking from failure to failure with no loss of enthusiasm." <span class="author">-- Winston Churchill</span>`,
    ` "Just when the caterpillar thought the world was ending, he turned into a butterfly." <span class="author">-- Proverb</span>`,
    `"Successful entrepreneurs are givers and not takers of positive energy." <span class="author">-- Anonymous`,
    `"Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them." <span class="author">-- Vaibhav Shah</span>`,
    `"Opportunities don't happen, you create them." <span class="author">-- Chris Grosser`,
    `"Try not to become a person of success, but rather try to become a person of value." <span class="author">-- Albert Einstein</span>`,
    `"Great minds discuss ideas; average minds discuss events; small minds discuss people." <span class="author">-- Eleanor Roosevelt`,
    `"I have not failed. I've just found 10,000 ways that won't work." <span class="author">-- Thomas A. Edison`,
    `"If you don't value your time, neither will others. Stop giving away your time and talents, start charging for it." <span class="author">-- Kim Garst</span>`,
    `"A successful man is one who can lay a firm foundation with the bricks others have thrown at him." <span class="author">-- David Brinkley</span>`,
    `"No one can make you feel inferior without your consent." <span class="author">-- Eleanor Roosevelt</span>`,
    `"The whole secret of a successful life is to find out what is one's destiny to do, and then do it." <span class="author">-- Henry Ford</span>`,
    `"If you're going through hell keep going." <span class="author">-- Winston Churchill</span>`,
    `"The ones who are crazy enough to think they can change the world, are the ones who do." <span class="author">-- Anonymous</span>`,
    `"Don't raise your voice, improve your argument." <span class="author">-- Anonymous</span>`,
    `"What seems to us as bitter trials are often blessings in disguise." <span class="author">-- Oscar Wilde</span>`,
    `“It’s so easy to be great nowadays, because everyone else is weak. If you have ANY mental toughness, if you have any fraction of self-discipline; The ability to not want to do it, but still do it; If you can get through to doing things that you hate to do: on the other side is GREATNESS ” <span class="author">-- David Goggins</span>`,
    `“We live in an external world. Everything, you have to see it, touch it. If you can for the rest of your life, live inside yourself – to find greatness, you have to go inside”. <span class="author">-- David Goggins</span>`,
    `"Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure." <span class="author">-- Marianne Williamson</span>`
  ]

  const randomQuote = Math.floor(Math.random() * quotes.length);
  const selectRandomQuote = quotes[randomQuote];

  $('#container').fadeIn(2000);
  container.innerHTML = selectRandomQuote;
}

randomQuotes();

const refreshButton = document.getElementById('refresh');

refreshButton.addEventListener('click', () => {
  location.reload();
});
