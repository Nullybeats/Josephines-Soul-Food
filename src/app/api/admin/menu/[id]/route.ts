import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { MenuCategory } from '@prisma/client';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id } = await params;

    // Build update data from allowed fields
    const updateData: Record<string, unknown> = {};

    if (body.name !== undefined) updateData.name = body.name;
    if (body.description !== undefined) updateData.description = body.description;
    if (body.price !== undefined) updateData.price = parseFloat(body.price);
    if (body.category !== undefined) {
      if (!Object.values(MenuCategory).includes(body.category)) {
        return NextResponse.json({ error: 'Invalid category' }, { status: 400 });
      }
      updateData.category = body.category;
    }
    if (body.image !== undefined) updateData.image = body.image;
    if (body.imagePosition !== undefined) updateData.imagePosition = body.imagePosition;
    if (body.available !== undefined) updateData.available = body.available;
    if (body.featured !== undefined) updateData.featured = body.featured;
    if (body.tags !== undefined) updateData.tags = body.tags;
    if (body.allergens !== undefined) updateData.allergens = body.allergens;
    if (body.prepTime !== undefined) updateData.prepTime = body.prepTime ? parseInt(body.prepTime) : null;
    if (body.sortOrder !== undefined) updateData.sortOrder = parseInt(body.sortOrder);

    const menuItem = await prisma.menuItem.update({
      where: { id },
      data: updateData,
    });

    return NextResponse.json(menuItem);
  } catch (error) {
    console.error('Error updating menu item:', error);
    return NextResponse.json(
      { error: 'Failed to update menu item' },
      { status: 500 }
    );
  }
}
