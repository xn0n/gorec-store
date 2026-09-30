import { Container } from "../../components/ui/Container";
import { SectionTitle } from "../../components/ui/SectionTitle";

interface SimplePageProps {
  title: string;
  text: string;
}

export function SimplePage({ title, text }: SimplePageProps) {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle eyebrow="Горец" title={title} text={text} />
      </Container>
    </section>
  );
}