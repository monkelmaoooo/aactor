<script>
  const text = "Monke 🎃";
  let i = 0;
  let forward = true;

  setInterval(() => {
    if (forward) {
      i++;
      if (i === text.length) forward = false;
    } else {
      i--;
      if (i === 0) forward = true;
    }
    document.title = text.substring(0, i);
  }, 200);
</script>
