const getMod = (cmd: string): number => {
  let mod = 0;
  if (cmd.includes("+")) {
    const seq = cmd.split("+");
    mod = parseInt(seq[seq.length - 1] as string, 10);
  } else if (cmd.includes("-")) {
    const seq = cmd.split("-");
    mod = -parseInt(seq[seq.length - 1] as string, 10);
  }

  return mod;
};

export default { getMod: getMod };
