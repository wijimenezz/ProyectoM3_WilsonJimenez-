export function renderChat() {
  const app = document.querySelector("#app");
  app.innerHTML = `<div class="section section-chat active" id="section-chat" data-section="chat">
  <div class="chat-wrap">
    <div class="chat-header">
      <div class="av-ring">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick Sanchez"
        />
      </div>
      <div class="chat-hd-info">
        <div class="chat-hd-name">Rick Sanchez</div>
        <div class="chat-hd-status">
          <div class="live-dot"></div>
          Online · Human
        </div>
      </div>
      <div class="chat-hd-badge">
        <span
          style="
                  display: inline-block;
                  width: 7px;
                  height: 7px;
                  border-radius: 50%;
                  background: var(--green);
                  margin-right: 5px;
                  vertical-align: middle;
                "
        ></span>
        Alive
      </div>
    </div>

    <div class="chat-messages">
      <div class="date-chip">Today · 11:42 AM</div>

      <div class="msg-row">
        <img
          class="msg-av"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
        />
        <div class="msg-col">
          <div class="bubble ai">
            Listen Morty — or whoever you are — I don't do small talk. I'm a
            genius. C-137 grade. What do you want?
          </div>
          <div class="msg-time">11:42</div>
        </div>
      </div>

      <div class="msg-row usr">
        <div class="msg-col">
          <div class="bubble usr">Where are you from, Rick?</div>
          <div class="msg-time">11:43</div>
        </div>
      </div>

      <div class="msg-row">
        <img
          class="msg-av"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
        />
        <div class="msg-col">
          <div class="bubble ai">
            Earth C-137. Best dimension. Well, was. I kind of blew it up once.
            Long story involving a love potion and most of humanity turning into
            Cronenbergs. Good times.
          </div>
          <div class="msg-time">11:43</div>
        </div>
      </div>

      <div class="msg-row usr">
        <div class="msg-col">
          <div class="bubble usr">What's your greatest invention?</div>
          <div class="msg-time">11:44</div>
        </div>
      </div>

      <div class="msg-row">
        <img
          class="msg-av"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
        />
        <div class="msg-col">
          <div class="bubble ai">
            The portal gun. Obviously. It folds space-time into a burrito of
            infinite possibility. You could also argue Szechuan sauce, but that
            was McDonald's and I was just their biggest fan.
          </div>
          <div class="msg-time">11:44</div>
        </div>
      </div>

      <div class="msg-row usr">
        <div class="msg-col">
          <div class="bubble usr">Do you actually care about Morty?</div>
          <div class="msg-time">11:45</div>
        </div>
      </div>

      <div class="msg-row">
        <img
          class="msg-av"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
        />
        <div class="msg-col">
          <div class="bubble ai">...</div>
          <div class="msg-time">11:45</div>
        </div>
      </div>

      <div class="typing-row">
        <img
          class="msg-av"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
        />
        <div class="typing-bubble">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>

    <div class="chat-input-bar">
      <div class="input-inner">
        <div class="fake-input">Message Rick…</div>
        <button class="send-btn">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>`;
}
