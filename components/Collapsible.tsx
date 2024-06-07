import { PropsWithChildren } from 'react';
import { StyleSheet, Text} from 'react-native';
export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  return (
    <>
      <Text>olá</Text>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
